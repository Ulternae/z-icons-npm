import React from 'react';

export interface LanWindowFrameOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowFrameOpen(props: LanWindowFrameOpenProps): React.ReactElement;
export default LanWindowFrameOpen;
