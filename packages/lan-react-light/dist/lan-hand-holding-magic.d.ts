import React from 'react';

export interface LanHandHoldingMagicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingMagic(props: LanHandHoldingMagicProps): React.ReactElement;
export default LanHandHoldingMagic;
