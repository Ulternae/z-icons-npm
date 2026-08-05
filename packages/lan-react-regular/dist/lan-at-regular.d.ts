import React from 'react';

export interface LanAtRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAtRegular(props: LanAtRegularProps): React.ReactElement;
export default LanAtRegular;
