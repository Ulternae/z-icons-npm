import React from 'react';

export interface CoreBookOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBookOpen: React.FC<CoreBookOpenProps>;
export default CoreBookOpen;
