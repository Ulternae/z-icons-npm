import React from 'react';

export interface CoreUmbrellaRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUmbrellaRegularDuo: React.FC<CoreUmbrellaRegularDuoProps>;
export default CoreUmbrellaRegularDuo;
