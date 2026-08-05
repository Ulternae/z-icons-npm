import React from 'react';

export interface LanFaceSadCryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSadCry(props: LanFaceSadCryProps): React.ReactElement;
export default LanFaceSadCry;
