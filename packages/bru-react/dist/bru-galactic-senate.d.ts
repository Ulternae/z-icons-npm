import React from 'react';

export interface BruGalacticSenateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGalacticSenate(props: BruGalacticSenateProps): React.ReactElement;
export default BruGalacticSenate;
