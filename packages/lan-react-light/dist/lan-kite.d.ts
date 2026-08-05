import React from 'react';

export interface LanKiteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKite(props: LanKiteProps): React.ReactElement;
export default LanKite;
