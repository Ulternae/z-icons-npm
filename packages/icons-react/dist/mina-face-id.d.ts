import React from 'react';

export interface MinaFaceIdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFaceId: React.FC<MinaFaceIdProps>;
export default MinaFaceId;
