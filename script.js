document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    const modal = document.getElementById('disclaimer-modal');
    const modalLink = document.getElementById('disclaimer-link');

    // Open modal when clicking the link
    if (modalLink) {
        modalLink.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    }

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    const universities = [
        { name: 'University of Cambridge', factor: 1.00 },
        { name: 'University of Oxford', factor: 0.99 },
        { name: 'University College London', factor: 0.99 },
        { name: 'Imperial College London', factor: 0.98 },
        { name: 'University of Edinburgh', factor: 0.97 },
        { name: 'University of St Andrews', factor: 0.96 },
        { name: 'Durham University', factor: 0.95 },
        { name: 'King\'s College London', factor: 0.94 },
        { name: 'London School of Economics', factor: 0.86 },
        { name: 'University of Manchester', factor: 0.85 },
        { name: 'University of Bristol', factor: 0.85 },
        { name: 'University of Glasgow', factor: 0.85 },
        { name: 'University of Birmingham', factor: 0.84 },
        { name: 'University of Sheffield', factor: 0.84 },
        { name: 'University of Warwick', factor: 0.84 },
        { name: 'University of Southampton', factor: 0.83 },
        { name: 'University of Leeds', factor: 0.80 },
        { name: 'University of Nottingham', factor: 0.80 },
        { name: 'Queen Mary University of London', factor: 0.80 },
        { name: 'City St George\'s, University of London', factor: 0.80 },
        { name: 'School of African and Oriental Studies', factor: 0.80 },
        { name: 'University of York', factor: 0.79 },
        { name: 'Newcastle University', factor: 0.79 },
        { name: 'University of Liverpool', factor: 0.79 },
        { name: 'Lancaster University', factor: 0.79 },
        { name: 'University of Exeter', factor: 0.79 },
        { name: 'University of Leicester', factor: 0.79 },
        { name: 'Cardiff University', factor: 0.79 },
        { name: 'Queen\'s University Belfast', factor: 0.79 },
        { name: 'University of Aberdeen', factor: 0.78 },
        { name: 'University of Bath', factor: 0.78 },
        { name: 'University of Surrey', factor: 0.78 },
        { name: 'University of Sussex', factor: 0.78 },
        { name: 'University of East Anglia', factor: 0.77 },
        { name: 'Loughborough University', factor: 0.77 },
        { name: 'Swansea University', factor: 0.77 },
        { name: 'University of Dundee', factor: 0.77 },
        { name: 'Aston University', factor: 0.74 },
        { name: 'University of Essex', factor: 0.74 },
        { name: 'University of Kent', factor: 0.74 },
        { name: 'University of Strathclyde', factor: 0.74 },
        { name: 'Bangor University', factor: 0.73 },
        { name: 'Heriot-Watt University', factor: 0.73 },
        { name: 'Royal Holloway, University of London', factor: 0.73 },
        { name: 'University of Hull', factor: 0.72 },
        { name: 'University of Portsmouth', factor: 0.72 },
        { name: 'University of Stirling', factor: 0.70 },
        { name: 'Keele University', factor: 0.70 },
        { name: 'University of Bradford', factor: 0.69 },
        { name: 'University of Reading', factor: 0.69 },
        { name: 'Birkbeck, University of London', factor: 0.69 },
        { name: 'University of Buckingham', factor: 0.69 },
        { name: 'University of Roehampton', factor: 0.69 },
        { name: 'Bournemouth University', factor: 0.69 },
        { name: 'Northumbria University', factor: 0.69 },
        { name: 'Goldsmiths, University of London', factor: 0.69 },
        { name: 'Middlesex University', factor: 0.68 },
        { name: 'University of Huddersfield', factor: 0.68 },
        { name: 'University of Plymouth', factor: 0.68 },
        { name: 'Aberystwyth University', factor: 0.68 },
        { name: 'Coventry University', factor: 0.68 },
        { name: 'De Montfort University', factor: 0.68 },
        { name: 'Liverpool John Moores University', factor: 0.68 },
        { name: 'Nottingham Trent University', factor: 0.68 },
        { name: 'Oxford Brookes University', factor: 0.68 },
        { name: 'Ulster University', factor: 0.68 },
        { name: 'University of Brighton', factor: 0.68 },
        { name: 'University of Derby', factor: 0.68 },
        { name: 'University of Hertfordshire', factor: 0.68 },
        { name: 'University of Lincoln', factor: 0.68 },
        { name: 'University of the West of England', factor: 0.68 },
        { name: 'University of the West of Scotland', factor: 0.68 },
        { name: 'University of Greenwich', factor: 0.68 },
        { name: 'Open University', factor: 0.68 },
        { name: 'Birmingham City University', factor: 0.68 },
        { name: 'Glasgow Caledonian University', factor: 0.68 },
        { name: 'Kingston University', factor: 0.68 },
        { name: 'Leeds Beckett University', factor: 0.68 },
        { name: 'Robert Gordon University', factor: 0.68 },
        { name: 'Sheffield Hallam University', factor: 0.68 },
        { name: 'Teesside University', factor: 0.68 },
        { name: 'University of Central Lancashire', factor: 0.68 },
        { name: 'University of Salford', factor: 0.67 },
        { name: 'University of Westminster', factor: 0.67 },
        { name: 'University of Wolverhampton', factor: 0.67 },
        { name: 'Cardiff Metropolitan University', factor: 0.67 },
        { name: 'Edge Hill University', factor: 0.67 },
        { name: 'Arden University', factor: 0.67 },
        { name: 'University of Bedfordshire', factor: 0.67 },
        { name: 'University of East London', factor: 0.67 },
        { name: 'University of Gloucestershire', factor: 0.67 },
        { name: 'University of West London', factor: 0.67 },
        { name: 'Manchester Metropolitan University', factor: 0.67 },
        { name: 'London South Bank University', factor: 0.67 },
        { name: 'University of Chester', factor: 0.67 },
        { name: 'University of Chichester', factor: 0.67 },
        { name: 'University of Cumbria', factor: 0.67 },
        { name: 'University of Winchester', factor: 0.67 },
        { name: 'University of Worcester', factor: 0.67 },
        { name: 'University of Sunderland', factor: 0.67 },
        { name: 'University of Staffordshire', factor: 0.67 },
        { name: 'University of South Wales', factor: 0.67 },
        { name: 'University of Northampton', factor: 0.67 },
        { name: 'University of Suffolk', factor: 0.67 },
        { name: 'University of Greater Manchester', factor: 0.67 },
        { name: 'Canterbury Christ Church University', factor: 0.67 },
        { name: 'Bath Spa University', factor: 0.67 },
        { name: 'Anglia Ruskin University', factor: 0.67 },
        { name: 'London Metropolitan University', factor: 0.66 },
        { name: 'Edinburgh Napier University', factor: 0.66 },
        { name: 'Falmouth University', factor: 0.66 },
        { name: 'Harper Adams University', factor: 0.66 },
        { name: 'Hartpury University', factor: 0.66 },
        { name: 'Liverpool Hope University', factor: 0.66 },
        { name: 'Plymouth Marjon University', factor: 0.66 },
        { name: 'Queen Margaret University', factor: 0.66 },
        { name: 'Southampton Solent University', factor: 0.66 },
        { name: 'St Mary\'s University, Twickenham', factor: 0.66 },
        { name: 'York St John University', factor: 0.66 },
        { name: 'Wrexham University', factor: 0.66 },
        { name: 'University of Wales', factor: 0.66 },
        { name: 'University of Wales Trinity Saint David', factor: 0.66 },
        { name: 'Buckinghamshire New University', factor: 0.65 },
        { name: 'Bishop Grosseteste University', factor: 0.64 },
        { name: 'Birmingham Newman University', factor: 0.63 },
        { name: 'University College Birmingham', factor: 0.62 },
        { name: 'Leeds Trinity University', factor: 0.61 },
        { name: 'Regent\'s University London', factor: 0.60 },
        { name: 'Richmond American University London', factor: 0.59 },
        { name: 'Northeastern University', factor: 0.40 }
    ];

    const universityInput = document.getElementById('university-input');
    const suggestionsContainer = document.getElementById('university-suggestions');
    const markInput = document.getElementById('mark-input');
    const resultsContainer = document.getElementById('results');

    let selectedUniversity = null;

    const calculateAndDisplayResults = () => {
        const mark = parseFloat(markInput.value);

        if (!selectedUniversity || isNaN(mark) || mark < 0 || mark > 100) {
            resultsContainer.innerHTML = '';
            return;
        }

        resultsContainer.innerHTML = '';
        universities
            .filter(uni => uni.name !== selectedUniversity.name)
            .forEach(uni => {
                // Calculate equivalent mark using the inverse ratio of the crop factors
                // Higher factor means more rigorous, so we divide by the ratio
                const equivalentMark = Math.min(100, parseFloat((mark * (selectedUniversity.factor / uni.factor)).toFixed(2)));
                const resultEl = document.createElement('div');
                resultEl.className = 'result-item';

                let color = 'black';
                if (equivalentMark > mark || equivalentMark === 100) {
                    color = 'green';
                } else if (equivalentMark < mark) {
                    color = 'red';
                }

                resultEl.innerHTML = `
                    <span class="university-name">${uni.name}</span>
                    <span class="university-mark" style="color: ${color};">${equivalentMark.toFixed(2)}%</span>
                `;
                resultsContainer.appendChild(resultEl);
            });
    };

    const showSuggestions = (filteredUniversities) => {
        suggestionsContainer.innerHTML = '';
        if (filteredUniversities.length > 0) {
            filteredUniversities.slice(0, 5).forEach(uni => {
                const suggestionEl = document.createElement('div');
                suggestionEl.className = 'suggestion-item';
                suggestionEl.textContent = uni.name;
                suggestionEl.addEventListener('click', () => {
                    universityInput.value = uni.name;
                    selectedUniversity = uni;
                    suggestionsContainer.innerHTML = '';
                    calculateAndDisplayResults();
                });
                suggestionsContainer.appendChild(suggestionEl);
            });
        }
    };

    universityInput.addEventListener('input', () => {
        const query = universityInput.value.toLowerCase();
        selectedUniversity = null; // Reset if user types again
        resultsContainer.innerHTML = '';
        if (query.length === 0) {
            suggestionsContainer.innerHTML = '';
            return;
        }
        const filtered = universities.filter(uni => uni.name.toLowerCase().includes(query));
        showSuggestions(filtered);
    });

    universityInput.addEventListener('focus', () => {
        const filtered = universities.filter(uni => uni.name.toLowerCase().includes(universityInput.value.toLowerCase()));
        showSuggestions(filtered);
    });

    document.addEventListener('click', (e) => {
        if (!suggestionsContainer.contains(e.target) && e.target !== universityInput) {
            suggestionsContainer.innerHTML = '';
        }
    });

        markInput.addEventListener('input', () => {
        if (parseFloat(markInput.value) > 100) {
            markInput.value = 100;
        }
        calculateAndDisplayResults();
    });
});
