import React from 'react';

export interface MinaUploadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUploadSolid: React.FC<MinaUploadSolidProps>;
export default MinaUploadSolid;
