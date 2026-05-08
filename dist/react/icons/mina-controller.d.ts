import React from 'react';

export interface MinaControllerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaController: React.FC<MinaControllerProps>;
export default MinaController;
