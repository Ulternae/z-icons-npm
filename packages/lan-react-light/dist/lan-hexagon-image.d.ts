import React from 'react';

export interface LanHexagonImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonImage(props: LanHexagonImageProps): React.ReactElement;
export default LanHexagonImage;
