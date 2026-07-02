import React from 'react';

export interface CoreUmbrellaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUmbrella(props: CoreUmbrellaProps): React.ReactElement;
export default CoreUmbrella;
