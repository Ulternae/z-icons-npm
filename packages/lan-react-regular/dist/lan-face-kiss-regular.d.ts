import React from 'react';

export interface LanFaceKissRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceKissRegular(props: LanFaceKissRegularProps): React.ReactElement;
export default LanFaceKissRegular;
