import React from 'react';

export interface LanFrameRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrameRegular(props: LanFrameRegularProps): React.ReactElement;
export default LanFrameRegular;
