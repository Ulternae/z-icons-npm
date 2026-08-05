import React from 'react';

export interface LanFaceDizzyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDizzyRegular(props: LanFaceDizzyRegularProps): React.ReactElement;
export default LanFaceDizzyRegular;
