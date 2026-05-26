import React from 'react';

export interface LanFaceGrinWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinWide: React.FC<LanFaceGrinWideProps>;
export default LanFaceGrinWide;
