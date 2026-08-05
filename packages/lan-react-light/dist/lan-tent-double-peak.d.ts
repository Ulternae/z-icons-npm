import React from 'react';

export interface LanTentDoublePeakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTentDoublePeak(props: LanTentDoublePeakProps): React.ReactElement;
export default LanTentDoublePeak;
