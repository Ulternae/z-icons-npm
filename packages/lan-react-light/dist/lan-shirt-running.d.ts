import React from 'react';

export interface LanShirtRunningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShirtRunning(props: LanShirtRunningProps): React.ReactElement;
export default LanShirtRunning;
