/**
 * Données des wilayas et communes d'Algérie pour WooCommerce
 * Format compatible avec l'API WooCommerce
 */
const AlgeriaLocations = {
    /**
     * Liste des wilayas d'Algérie au format WooCommerce
     * Format: code DZ-XX et nom
     */
    wilayas: [
        { code: 'DZ-01', name: 'Adrar' },
        { code: 'DZ-02', name: 'Chlef' },
        { code: 'DZ-03', name: 'Laghouat' },
        { code: 'DZ-04', name: 'Oum El Bouaghi' },
        { code: 'DZ-05', name: 'Batna' },
        { code: 'DZ-06', name: 'Béjaïa' },
        { code: 'DZ-07', name: 'Biskra' },
        { code: 'DZ-08', name: 'Béchar' },
        { code: 'DZ-09', name: 'Blida' },
        { code: 'DZ-10', name: 'Bouira' },
        { code: 'DZ-11', name: 'Tamanrasset' },
        { code: 'DZ-12', name: 'Tébessa' },
        { code: 'DZ-13', name: 'Tlemcen' },
        { code: 'DZ-14', name: 'Tiaret' },
        { code: 'DZ-15', name: 'Tizi Ouzou' },
        { code: 'DZ-16', name: 'Alger' },
        { code: 'DZ-17', name: 'Djelfa' },
        { code: 'DZ-18', name: 'Jijel' },
        { code: 'DZ-19', name: 'Sétif' },
        { code: 'DZ-20', name: 'Saïda' },
        { code: 'DZ-21', name: 'Skikda' },
        { code: 'DZ-22', name: 'Sidi Bel Abbès' },
        { code: 'DZ-23', name: 'Annaba' },
        { code: 'DZ-24', name: 'Guelma' },
        { code: 'DZ-25', name: 'Constantine' },
        { code: 'DZ-26', name: 'Médéa' },
        { code: 'DZ-27', name: 'Mostaganem' },
        { code: 'DZ-28', name: 'M\'Sila' },
        { code: 'DZ-29', name: 'Mascara' },
        { code: 'DZ-30', name: 'Ouargla' },
        { code: 'DZ-31', name: 'Oran' },
        { code: 'DZ-32', name: 'El Bayadh' },
        { code: 'DZ-33', name: 'Illizi' },
        { code: 'DZ-34', name: 'Bordj Bou Arréridj' },
        { code: 'DZ-35', name: 'Boumerdès' },
        { code: 'DZ-36', name: 'El Tarf' },
        { code: 'DZ-37', name: 'Tindouf' },
        { code: 'DZ-38', name: 'Tissemsilt' },
        { code: 'DZ-39', name: 'El Oued' },
        { code: 'DZ-40', name: 'Khenchela' },
        { code: 'DZ-41', name: 'Souk Ahras' },
        { code: 'DZ-42', name: 'Tipaza' },
        { code: 'DZ-43', name: 'Mila' },
        { code: 'DZ-44', name: 'Aïn Defla' },
        { code: 'DZ-45', name: 'Naâma' },
        { code: 'DZ-46', name: 'Aïn Témouchent' },
        { code: 'DZ-47', name: 'Ghardaïa' },
        { code: 'DZ-48', name: 'Relizane' },
        { code: 'DZ-49', name: 'El M\'ghair' },
        { code: 'DZ-50', name: 'El Meniaa' },
        { code: 'DZ-51', name: 'Ouled Djellal' },
        { code: 'DZ-52', name: 'Bordj Badji Mokhtar' },
        { code: 'DZ-53', name: 'Béni Abbès' },
        { code: 'DZ-54', name: 'Timimoun' },
        { code: 'DZ-55', name: 'Touggourt' },
        { code: 'DZ-56', name: 'Djanet' },
        { code: 'DZ-57', name: 'In Salah' },
        { code: 'DZ-58', name: 'In Guezzam' }
    ],
    
    /**
     * Communes par wilaya
     * Format: DZ-XX: [communes]
     */
    communesByWilaya: {
        'DZ-01': ['Adrar', 'Tamest', 'Charouine', 'Reggane', 'In Zghmir', 'Tit', 'Tsabit', 'Timokten', 'Tamentit'],
        'DZ-02': ['Chlef', 'Ténès', 'Bénairia', 'El Karimia', 'Tadjena', 'Taougrite', 'Beni Haoua', 'Sobha', 'Harchoun', 'Ouled Fares', 'Sidi Akkacha', 'Boukadir'],
        'DZ-03': ['Laghouat', 'Ksar El Hirane', 'Bennasser Benchohra', 'Sidi Makhlouf', 'Hassi Delaa', 'Hassi R\'Mel', 'Aïn Madhi', 'Tadjemout', 'Kheneg', 'Gueltat Sidi Saad', 'Brida'],
        'DZ-04': ['Oum El Bouaghi', 'Aïn Beïda', 'Aïn M\'lila', 'Behir Chergui', 'El Amiria', 'Sigus', 'El Belala', 'Aïn Babouche', 'Berriche', 'Ouled Hamla', 'Dhalaa'],
        'DZ-05': ['Batna', 'Merouana', 'Seriana', 'Menaa', 'El Madher', 'Tazoult', 'N\'Gaous', 'Arris', 'Theniet El Abed', 'Timgad', 'Aïn Touta'],
        'DZ-06': ['Béjaïa', 'Akbou', 'Seddouk', 'Tichy', 'Chemini', 'Souk El Ténine', 'Tibane', 'Toudja', 'Darguina', 'Aokas', 'Adekar', 'Ait Smail'],
        'DZ-07': ['Biskra', 'Tolga', 'Ouled Djellal', 'Sidi Khaled', 'Ourlal', 'Lioua', 'Ouled Saleh', 'Bordj Ben Azzouz', 'Lichana', 'Foughala', 'El Hadjeb', 'Zeribet El Oued'],
        'DZ-08': ['Béchar', 'Kenadsa', 'Abadla', 'Erg Ferradj', 'Mechraa Houari Boumedienne', 'Béni Abbès', 'El Ouata', 'Boukais', 'Lahmar', 'Beni Ounif'],
        'DZ-09': ['Blida', 'Bouinan', 'Boufarik', 'Oued El Alleug', 'Ouled Yaïch', 'Chréa', 'Mouzaia', 'Chiffa', 'Meftah', 'Chebli', 'Guerrouaou', 'Soumaa', 'Beni Tamou', 'Bouarfa', 'Beni Mered'],
        'DZ-10': ['Bouira', 'Souk El Khemis', 'Kadiria', 'Lakhdaria', 'Taghzout', 'Hanif', 'Dirah', 'Aomar', 'Hadjera Zerga', 'Bordj Okhriss', 'El Asnam', 'Taguedit', 'Aïn Bessem'],
        'DZ-15': ['Tizi Ouzou', 'Draâ Ben Khedda', 'Ouaguenoun', 'Tizi Rached', 'Azazga', 'Fréha', 'Boghni', 'Ouadhia', 'Aïn El Hammam', 'Iferhounène', 'Bouzeguène', 'Larbaa Nath Irathen', 'Tizi Gheniff', 'Makouda'],
        'DZ-16': ['Alger Centre', 'Sidi M\'Hamed', 'El Madania', 'Belouizdad', 'Bab El Oued', 'Bologhine', 'Casbah', 'Hussein Dey', 'Kouba', 'El Harrach', 'Baraki', 'Dar El Beïda', 'Bab Ezzouar', 'Ben Aknoun', 'El Biar', 'Bouzareah', 'Bir Mourad Raïs', 'El Mouradia', 'Hydra', 'Mohammadia', 'Bordj El Kiffan', 'Dely Ibrahim'],
        'DZ-19': ['Sétif', 'Aïn El Kebira', 'Beni Aziz', 'Bir El Arch', 'Babor', 'Bazer Sakhra', 'Beni Chebana', 'Ain Oulmene', 'Bougaa', 'Guenzet', 'Hammam Sokhna', 'Salah Bey', 'Ain Azel'],
        'DZ-25': ['Constantine', 'Hamma Bouziane', 'Ibn Ziad', 'Messaoud Boudjeriou', 'El Khroub', 'Aïn Abid', 'Zighoud Youcef', 'Didouche Mourad', 'Ibn Badis', 'Aïn Smara', 'Béni Hamidane'],
        'DZ-31': ['Oran', 'Gdyel', 'Bir El Djir', 'Es Senia', 'Arzew', 'Bethioua', 'Marsat El Hadjadj', 'Ain Turk', 'Bousfer', 'El Ançor', 'Mers El Kébir', 'Hassi Bounif', 'Hassi Ben Okba', 'Sidi Chami', 'Boufatis', 'Mers El Hadjadj'],
        'DZ-35': ['Boumerdès', 'Boudouaou', 'Afir', 'Bordj Menaiel', 'Baghlia', 'Sidi Daoud', 'Naciria', 'Isser', 'Zemmouri', 'Si Mustapha', 'Tidjelabine', 'Djinet', 'Dellys', 'Chabet el Ameur']
    },
    
    /**
     * Méthodes utilitaires pour formater les données pour WooCommerce
     */
    formatWooCommerceData: function(formData, items) {
        // Format de base pour les données WooCommerce
        const wooData = {
            billing: {
                first_name: (formData.fullName || '').split(' ')[0] || '',
                last_name: (formData.fullName || '').split(' ').slice(1).join(' ') || '',
                phone: formData.phone || '',
                email: formData.email || '',
                address_1: formData.address || '',
                address_2: '',
                city: formData.commune || '',
                state: formData.wilaya || '',
                postcode: formData.postcode || '',
                country: formData.country || 'DZ'
            },
            shipping: {
                first_name: (formData.fullName || '').split(' ')[0] || '',
                last_name: (formData.fullName || '').split(' ').slice(1).join(' ') || '',
                address_1: formData.address || '',
                address_2: '',
                city: formData.commune || '',
                state: formData.wilaya || '',
                postcode: formData.postcode || '',
                country: formData.country || 'DZ'
            },
            shipping_method: formData.deliveryMethod === 'home' ? 'flat_rate' : 'local_pickup',
            payment_method: 'cod', // Cash on Delivery (paiement à la livraison)
            payment_method_title: 'Paiement à la livraison',
            customer_note: formData.notes || '',
            line_items: Array.isArray(items) ? items.map(item => ({
                product_id: item.id || 0,
                quantity: item.quantity || 1,
                variation_id: item.variationId || 0
            })) : []
        };
        
        return wooData;
    },
    
    // Méthode pour extraire le code numérique d'un code de wilaya WooCommerce (DZ-XX)
    getNumericWilayaCode: function(wilayaCode) {
        if (!wilayaCode || typeof wilayaCode !== 'string') return '';
        const match = wilayaCode.match(/DZ-(\d+)/);
        return match ? match[1] : '';
    },
    
    // Méthode pour convertir un code numérique en code WooCommerce
    getWooCommerceWilayaCode: function(numericCode) {
        if (!numericCode) return '';
        // Assurer que le code a 2 chiffres
        const paddedCode = numericCode.toString().padStart(2, '0');
        return `DZ-${paddedCode}`;
    }
};

// Exporter l'objet pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AlgeriaLocations;
} 