import React from 'react';

export interface CorePawRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePawRegularDuo: React.FC<CorePawRegularDuoProps>;
export default CorePawRegularDuo;
