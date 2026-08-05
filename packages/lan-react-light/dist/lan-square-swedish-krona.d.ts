import React from 'react';

export interface LanSquareSwedishKronaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareSwedishKrona(props: LanSquareSwedishKronaProps): React.ReactElement;
export default LanSquareSwedishKrona;
