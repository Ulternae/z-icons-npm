import React from 'react';

export interface MinaCameraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCamera: React.FC<MinaCameraProps>;
export default MinaCamera;
