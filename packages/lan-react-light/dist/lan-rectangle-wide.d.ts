import React from 'react';

export interface LanRectangleWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleWide(props: LanRectangleWideProps): React.ReactElement;
export default LanRectangleWide;
