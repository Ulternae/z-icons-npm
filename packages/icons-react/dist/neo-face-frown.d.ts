import React from 'react';

export interface NeoFaceFrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFaceFrown: React.FC<NeoFaceFrownProps>;
export default NeoFaceFrown;
