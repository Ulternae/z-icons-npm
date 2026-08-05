import React from 'react';

export interface LanStethoscopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStethoscope(props: LanStethoscopeProps): React.ReactElement;
export default LanStethoscope;
