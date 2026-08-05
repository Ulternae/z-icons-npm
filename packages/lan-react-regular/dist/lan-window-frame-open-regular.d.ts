import React from 'react';

export interface LanWindowFrameOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowFrameOpenRegular(props: LanWindowFrameOpenRegularProps): React.ReactElement;
export default LanWindowFrameOpenRegular;
