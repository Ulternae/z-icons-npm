import React from 'react';

export interface LanPersonSkatingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSkating(props: LanPersonSkatingProps): React.ReactElement;
export default LanPersonSkating;
