import React from 'react';

export interface LanUmbrellaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUmbrellaRegular(props: LanUmbrellaRegularProps): React.ReactElement;
export default LanUmbrellaRegular;
