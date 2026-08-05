import React from 'react';

export interface LanSignalStreamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignalStream(props: LanSignalStreamProps): React.ReactElement;
export default LanSignalStream;
