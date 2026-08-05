import React from 'react';

export interface MinaCrosshairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCrosshair(props: MinaCrosshairProps): React.ReactElement;
export default MinaCrosshair;
