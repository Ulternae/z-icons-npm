import React from 'react';

export interface MinaMobileSignalOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMobileSignalOne: React.FC<MinaMobileSignalOneProps>;
export default MinaMobileSignalOne;
