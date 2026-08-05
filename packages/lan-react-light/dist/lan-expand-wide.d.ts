import React from 'react';

export interface LanExpandWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExpandWide(props: LanExpandWideProps): React.ReactElement;
export default LanExpandWide;
