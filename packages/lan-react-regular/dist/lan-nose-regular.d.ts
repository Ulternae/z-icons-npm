import React from 'react';

export interface LanNoseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNoseRegular(props: LanNoseRegularProps): React.ReactElement;
export default LanNoseRegular;
