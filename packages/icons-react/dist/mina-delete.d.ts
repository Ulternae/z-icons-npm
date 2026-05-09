import React from 'react';

export interface MinaDeleteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDelete: React.FC<MinaDeleteProps>;
export default MinaDelete;
