import React from 'react';

export interface CoreCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleUser: React.FC<CoreCircleUserProps>;
export default CoreCircleUser;
