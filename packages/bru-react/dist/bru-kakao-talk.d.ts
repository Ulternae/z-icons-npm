import React from 'react';

export interface BruKakaoTalkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruKakaoTalk(props: BruKakaoTalkProps): React.ReactElement;
export default BruKakaoTalk;
