import React from 'react';

export interface LanSquareHryvniaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareHryvniaThin(props: LanSquareHryvniaThinProps): React.ReactElement;
export default LanSquareHryvniaThin;
