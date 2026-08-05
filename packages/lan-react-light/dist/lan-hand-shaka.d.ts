import React from 'react';

export interface LanHandShakaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandShaka(props: LanHandShakaProps): React.ReactElement;
export default LanHandShaka;
