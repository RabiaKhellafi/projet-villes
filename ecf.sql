-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  Dim 12 mai 2019 à 16:10
-- Version du serveur :  10.1.37-MariaDB
-- Version de PHP :  7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Base de données :  `ecf`
--

-- --------------------------------------------------------

--
-- Structure de la table `villes`
--

CREATE TABLE `villes` (
  `id` int(5) NOT NULL,
  `ville` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `pays` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `continent` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `population` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `villes`
--

INSERT INTO `villes` (`id`, `ville`, `pays`, `continent`, `population`) VALUES
(1, 'Paris', 'France', 'Europe', 2),
(2, 'Paris', 'Etats-Unis', 'Amérique du Nord', 0),
(3, 'Ouarzazate', 'Maroc', 'Afrique', 0),
(4, 'Hanoï', 'Viêtnam', 'Asie', 8),
(5, 'Perth', 'Australie', 'Australie', 2),
(6, 'Dublin', 'Irlande', 'Europe', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `villes`
--
ALTER TABLE `villes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `villes`
--
ALTER TABLE `villes`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

