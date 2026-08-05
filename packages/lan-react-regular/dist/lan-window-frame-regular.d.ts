import React from 'react';

export interface LanWindowFrameRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowFrameRegular(props: LanWindowFrameRegularProps): React.ReactElement;
export default LanWindowFrameRegular;
