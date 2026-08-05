import React from 'react';

export interface LanWaveformPathProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveformPath(props: LanWaveformPathProps): React.ReactElement;
export default LanWaveformPath;
