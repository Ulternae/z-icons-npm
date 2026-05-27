import React from 'react';

export interface CoreUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUser: React.FC<CoreUserProps>;
export default CoreUser;
