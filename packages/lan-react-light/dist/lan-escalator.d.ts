import React from 'react';

export interface LanEscalatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEscalator(props: LanEscalatorProps): React.ReactElement;
export default LanEscalator;
