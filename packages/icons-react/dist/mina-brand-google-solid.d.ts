import React from 'react';

export interface MinaBrandGoogleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandGoogleSolid: React.FC<MinaBrandGoogleSolidProps>;
export default MinaBrandGoogleSolid;
