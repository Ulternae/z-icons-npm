import React from 'react';

export interface LanMicroscopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicroscope(props: LanMicroscopeProps): React.ReactElement;
export default LanMicroscope;
