import React from 'react';

export interface LanFaceMaskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMaskRegular(props: LanFaceMaskRegularProps): React.ReactElement;
export default LanFaceMaskRegular;
