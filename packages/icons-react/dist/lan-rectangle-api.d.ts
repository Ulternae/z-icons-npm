import React from 'react';

export interface LanRectangleApiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleApi: React.FC<LanRectangleApiProps>;
export default LanRectangleApi;
