import React from 'react';

export interface MinaLocationUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationUser: React.FC<MinaLocationUserProps>;
export default MinaLocationUser;
