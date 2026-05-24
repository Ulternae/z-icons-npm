import React from 'react';

export interface BruGalacticSenateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGalacticSenate: React.FC<BruGalacticSenateProps>;
export default BruGalacticSenate;
