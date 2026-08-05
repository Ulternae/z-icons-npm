import React from 'react';

export interface LanSneakerRunningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSneakerRunning(props: LanSneakerRunningProps): React.ReactElement;
export default LanSneakerRunning;
