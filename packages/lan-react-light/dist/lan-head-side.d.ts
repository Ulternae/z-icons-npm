import React from 'react';

export interface LanHeadSideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSide(props: LanHeadSideProps): React.ReactElement;
export default LanHeadSide;
