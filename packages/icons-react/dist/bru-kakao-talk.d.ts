import React from 'react';

export interface BruKakaoTalkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruKakaoTalk: React.FC<BruKakaoTalkProps>;
export default BruKakaoTalk;
