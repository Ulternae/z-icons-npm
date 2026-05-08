import React from 'react';

export interface MinaActivityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaActivity: React.FC<MinaActivityProps>;
export default MinaActivity;
