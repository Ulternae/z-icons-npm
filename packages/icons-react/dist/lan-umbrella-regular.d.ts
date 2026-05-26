import React from 'react';

export interface LanUmbrellaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUmbrellaRegular: React.FC<LanUmbrellaRegularProps>;
export default LanUmbrellaRegular;
